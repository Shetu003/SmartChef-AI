package com.smartchef.backend.service;

import com.smartchef.backend.model.RecipeResponse;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@Service
public class GeminiService {

    @Value("${gemini.api.key}")
    private String apiKey;

    private final String MODEL_NAME = "gemini-1.5-pro";
    private final String URL = "https://generativelanguage.googleapis.com/v1beta/models/" +
            MODEL_NAME + ":generateContent";

    public RecipeResponse generateRecipe(String ingredients) {
        RestTemplate restTemplate = new RestTemplate();

        String prompt = "Generate a recipe using the following ingredients: " + ingredients +
                ". Include:\n1. A short plain-text description\n2. A numbered list of ingredients\n3. A numbered list of steps. Do not include images or markdown formatting.";

        Map<String, Object> userPart = Map.of("text", prompt);
        Map<String, Object> content = Map.of("role", "user", "parts", List.of(userPart));
        Map<String, Object> requestBody = Map.of("contents", List.of(content));

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_JSON);
        headers.set("x-goog-api-key", apiKey);

        HttpEntity<Map<String, Object>> requestEntity = new HttpEntity<>(requestBody, headers);

        try {
            ResponseEntity<Map> responseEntity = restTemplate.postForEntity(URL, requestEntity, Map.class);
            Map<String, Object> responseBody = responseEntity.getBody();

            String fullText = "No response from Gemini AI.";
            if (responseBody != null && responseBody.containsKey("candidates")) {
                List<Map<String, Object>> candidates = (List<Map<String, Object>>) responseBody.get("candidates");
                if (!candidates.isEmpty()) {
                    Map<String, Object> contentResp = (Map<String, Object>) candidates.get(0).get("content");
                    List<Map<String, Object>> parts = (List<Map<String, Object>>) contentResp.get("parts");
                    fullText = (String) parts.get(0).get("text");
                }
            }

            RecipeResponse recipe = parseRecipe(fullText);

            // Add additional details (Estimated Time, Nutritional Info, Tips)
            recipe.setCookingTime("20 minutes");  // Example static time
            recipe.setNutritionalInfo("Approx. 350 kcal per serving, 10g carbs, 5g protein, 10g fat");
            recipe.setCookingTips("Tip: Toast the bread before frying for extra crispiness.");

            return recipe;

        } catch (Exception e) {
            e.printStackTrace();
            RecipeResponse error = new RecipeResponse();
            error.setName("Error");
            error.setDescription("Failed to fetch recipe: " + e.getMessage());
            return error;
        }
    }

    private RecipeResponse parseRecipe(String fullText) {
        RecipeResponse recipe = new RecipeResponse();

        String[] sections = fullText.split("(?i)ingredients\\s*:|(?i)steps\\s*:");
        if (sections.length >= 3) {
            recipe.setDescription(sections[0].trim());
            recipe.setIngredients(parseList(sections[1]));
            recipe.setSteps(parseList(sections[2]));
        } else {
            recipe.setDescription(fullText);
            recipe.setIngredients(List.of("Not available"));
            recipe.setSteps(List.of("Not available"));
        }

        recipe.setName("Generated Recipe");
        recipe.setImageUrl(null); // No image for now
        return recipe;
    }

    private List<String> parseList(String text) {
        List<String> items = new ArrayList<>();
        for (String line : text.split("\n")) {
            line = line.trim().replaceAll("^[0-9]+\\.?\\s*", ""); // Remove leading numbers
            if (!line.isBlank()) {
                items.add(line);
            }
        }
        return items;
    }
}
