import { apiGitHub } from "../api";
import { UserFollowersResponse, UserListResponse, UserProfileResponse } from "../interfaces";

export const getUserList = async (query: string) => {
    try {
        const { data } = await apiGitHub.get<UserListResponse>(`/search/users?q=${query}`);
        return data.items;
    } catch (error) {
        console.error("Error getting user list:", error);
        throw error;
    }
}

export const getUserProfile = async (query: string) => {
    try {
        const { data } = await apiGitHub.get<UserProfileResponse>(`/users/${query}`);
        return data;
    } catch (error) {
        console.error("Error getting user profile:", error);
        throw error;
    }
}

export const getUserFollowers = async (username: string): Promise<number> => {
    try {
        const { data } = await apiGitHub.get<UserFollowersResponse[]>(`/users/${username}/followers`);
        return data.length;
    } catch (error) {
        console.error("Error getting user followers:", error);
        throw error;
    }
};

