package com.smartchef.backend.model;

import java.util.List;

public class RecipeResponse {

    private String name;
    private String description;
    private List<String> ingredients;
    private List<String> steps;
    private String imageUrl;

    // Add these new fields
    private String cookingTime;
    private String nutritionalInfo;
    private String cookingTips;

    // Getters and Setters for the new fields
    public String getCookingTime() {
        return cookingTime;
    }

    public void setCookingTime(String cookingTime) {
        this.cookingTime = cookingTime;
    }

    public String getNutritionalInfo() {
        return nutritionalInfo;
    }

    public void setNutritionalInfo(String nutritionalInfo) {
        this.nutritionalInfo = nutritionalInfo;
    }

    public String getCookingTips() {
        return cookingTips;
    }

    public void setCookingTips(String cookingTips) {
        this.cookingTips = cookingTips;
    }

    // Existing getters and setters
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public List<String> getIngredients() {
        return ingredients;
    }

    public void setIngredients(List<String> ingredients) {
        this.ingredients = ingredients;
    }

    public List<String> getSteps() {
        return steps;
    }

    public void setSteps(List<String> steps) {
        this.steps = steps;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
