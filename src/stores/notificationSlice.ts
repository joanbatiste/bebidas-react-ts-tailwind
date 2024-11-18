import { StateCreator } from "zustand";
import { FavoritesSliceType } from "./favoritesSlice";

type Notification = {
    text: string
    error: boolean
    show: boolean
}

export type NotificationSliceType = {
    notifiation: Notification
    showNotification: (payload: Pick<Notification, 'text' | 'error'>) => void
    hideNotifiation: () => void
}

export const createNotifiatonSlice : StateCreator<NotificationSliceType & FavoritesSliceType, [], [], NotificationSliceType> = (set, get) => ({
    notifiation: {
        text: '',
        error: false,
        show: false
    },
    showNotification: (payload) => {
        set({
            notifiation: {
                text: payload.text,
                error: payload.error,
                show: true
            }
        })
        setTimeout(() => {
            get().hideNotifiation()
        }, 5000);
    },
    hideNotifiation: () => {
        set({
            notifiation: {
                text: '',
                error: false,
                show: false
            }
        })
    }
})