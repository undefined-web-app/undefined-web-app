import {createAsyncThunk}
    from "@reduxjs/toolkit"
import * as service
    from "./bookmark-service"

// export const findBookMarkThunk = createAsyncThunk(
//     'bookmark/findbookmark',
//     async (userid) =>{
//         await service.findBookmarkByUserId(userid)
//     }
// )


export const findBookMarkThunk1 = createAsyncThunk(
    'bookmark/findbookmark1', async () => {
        return await service.findBookmark();
    }
)