import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./bookmark-service"

export const findBookMarkThunk = createAsyncThunk(
    'bookmark/findbookmark',
    async (userid) =>{
        const b = await service.findBookmarkByUserId(userid)
        return b
    }
)

export const CreateBookMarkThunk = createAsyncThunk(
    'bookmark/createbookmark',
    async (bookmark) =>{
        const b = await service.createBookmark(bookmark)
        return b
    }
)
