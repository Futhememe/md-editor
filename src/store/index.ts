import create from 'zustand'

interface useDocumentStoreDTO {
  documentName: string,
  setDocumentName: (text: string) => void
}

export const useDocumentStore = create<useDocumentStoreDTO>((set, get) => ({
  documentName: '',
  setDocumentName: (text: string) => set((state) => ({ documentName: text }))
}))