package com.smartchef.backend.controller;

import com.smartchef.backend.model.RecipeResponse;
import com.smartchef.backend.service.GeminiService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Map;

@RestController
@RequestMapping("/api/recipes")
public class RecipeController {

    @Autowired
    private GeminiService geminiService;

    @PostMapping("/generate")
    public RecipeResponse generateRecipe(@RequestBody Map<String, String> body) {
        String ingredients = body.get("ingredients");
        return geminiService.generateRecipe(ingredients);
    }
}
