import axios from "axios";
import { API_ENDPOINT } from "../request_utils";

export interface CommentResponse {
  id: string;
  posterId: string;
  posterName: string;
  content: string;
}

export interface PostResponse {
  postId: string;
  vote: boolean | undefined;
  title: string;
  content: string;
  posterName: string;
  subcledditName: string;
  posterId: string;
  initialComments: CommentResponse[] | undefined;
  upvotes: number;
  downvotes: number;
}

export interface PostListResponse {
  posts: PostResponse[];
}

export async function getPostsInAll(page: number = 1) {
  try {
    axios.get(`${API_ENDPOINT}/api/post/all/${page}`);
  } catch (err) {}
}
