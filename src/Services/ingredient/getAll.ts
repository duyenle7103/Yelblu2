// Services/ingredient.ts

export interface Ingredient {
    id: number;
    name: string;
    // Thêm các field khác nếu backend có, ví dụ: unit, imageUrl, etc.
}

export async function apiGetAllIngredients(): Promise<{
    success: boolean;
    data?: Ingredient[];
    message?: string;
}> {
    try {
        const response = await fetch("https://yelblube.onrender.com/ingredients", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if (!response.ok) {
            const errorData = await response.json();
            return {
                success: false,
                message: errorData.message || "Failed to fetch ingredients",
            };
        }

        const data = await response.json();

        return {
            success: true,
            data,
        };
    } catch (error) {
        console.error("apiGetAllIngredients error:", error);
        return {
            success: false,
            message: "Network error",
        };
    }
}
