import axios from "axios";
import type { Note, NoteTag } from "../types/note";

const BASE_URL = "https://notehub-public.goit.study/api";

const token = import.meta.env.VITE_NOTEHUB_TOKEN;

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    Authorization: `Bearer ${token}`,
  },
});

export interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export interface FetchNotesParams {
  page: number;
  perPage: number;
  search?: string;
}

export interface CreateNoteParams {
  title: string;
  content: string;
  tag: NoteTag;
}
export const fetchNotes = async ({
  page,
  perPage,
  search = "",
}: FetchNotesParams): Promise<FetchNotesResponse> => {
  const response = await api.get<FetchNotesResponse>("/notes", {
    params: {
      page,
      perPage,
      search,
    },
  });

  return response.data;
};
export const createNote = async (newNote: CreateNoteParams): Promise<Note> => {
  const response = await api.post<Note>("/notes", newNote);

  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete<Note>(`/notes/${id}`);

  return response.data;
};
