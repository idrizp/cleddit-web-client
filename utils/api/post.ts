import axios from "axios";
import { API_ENDPOINT, authenticatedAxios } from "../request_utils";

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

export interface VoteRequest {
  postId: string;
  positive: boolean;
}

export interface VoteResponse {
  positive: boolean;
}

export function getPostsInAll(page: number = 1) {
  return axios.get<PostListResponse>(`${API_ENDPOINT}/api/post/all/${page}`);
}

export function getPost(postId: string) {
  return axios.get<PostResponse>(`${API_ENDPOINT}/api/post/one/${postId}`);
}

export function vote(postId: string, positive: boolean) {
  const payload: VoteRequest = {
    postId: postId,
    positive: positive
  }
  return authenticatedAxios.post<VoteResponse>(`${API_ENDPOINT}/api/post/vote/`, payload);
}
