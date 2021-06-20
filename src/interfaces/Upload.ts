// This interface contains uploads as they appear on the frontend, might be missing things such as the deletionkey (Which is only used in ShareX anyway)

export interface Upload {
    id: string,
    name: string,
    type: 'image' | 'video' | 'audio' | 'generic',
    media_type?: string, // ! Make this a string literal. This is the mimetype of the file (if it has any)
    userID: string,
    fileurl: string,
    thumbnail: string,
    uploaded_at: number,
    liked: boolean,
}

// Used for API response
export interface UploadResponse {
    uploads: Upload[],
}

// Named of Upload[] collection. Has a name (title), e.g: Last 24 hours, Last 7 days, favorited, trash etc
export interface UploadCollection {
    name: string,
    uploads?: Upload[],
}

export interface SortCriteria {
    name: string;
    within_days: number;
    key: string;
}
