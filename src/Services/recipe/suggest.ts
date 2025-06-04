// Services/recipe.ts

export interface SuggestRecipeByLabelDto {
    labels: string[];
}

export async function apiSuggestRecipeByLabel(labels: string[]) {
    try {
        const response = await fetch("https://yelblube.onrender.com/recipes/suggest-label", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ ingredientLabels: labels }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || "Gợi ý thất bại" };
        }

        const data = await response.json();
        return {
            success: true,
            data,
        };
    } catch (error) {
        console.error("apiSuggestRecipeByLabel error:", error);
        return {
            success: false,
            message: "Lỗi kết nối mạng",
        };
    }
}
