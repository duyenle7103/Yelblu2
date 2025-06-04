export interface LoginDto {
    identity: string; // username or email
    password: string;
}

export async function apiLogin(identity: string, password: string) {
    try {
        const response = await fetch("https://localhost:3000/auth/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ identity, password }),
        });

        if (!response.ok) {
            const errorData = await response.json();
            return { success: false, message: errorData.message || "Login failed" };
        }

        const data = await response.json();

        // Backend return { accessToken, refreshToken }
        return {
            success: true,
            accessToken: data.accessToken,
            refreshToken: data.refreshToken,
            userInfo: data.userInfo,
        };
    } catch (error) {
        console.error("apiLogin error:", error);
        return { success: false, message: "Network error" };
    }
}
