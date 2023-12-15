import { APIcomments_URI, TOKEN_APIcomments } from "../constantes.js";
import { Render } from "../render.js";
import { commentsToRender } from "./getComments.js";

const comments = new Render("dataList");
comments.fetchData(APIcomments_URI, 
   commentsToRender, 
   {
      method: 'GET',
      headers: {
         'Authorization': `Bearer ${TOKEN_APIcomments}`
      }      
   })