const API_KEY = "AIzaSyCWWcxidOOzDR8SbEofjAUVdp2u51YtXj0";

const category = {
  "/": "",
  "/sports": "videoCategoryId=17&",
  "/game": "videoCategoryId=20&",
  "/music": "videoCategoryId=10&",
};

// path에 따라 카테고리에 맞는 인기동영상을 가져오는 api
export async function getPopular(path) {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&maxResults=60&${
      category[path] || ""
    }regionCode=KR&key=${API_KEY}`
  );
  let json = await response.json();
  return json.items;
}
// path에 따라 카테고리에 맞는 인기동영상의 조회수를 가져오는 api
export async function getPopularViews(path) {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=statistics&chart=mostPopular&maxResults=60&${
      category[path] || ""
    }regionCode=KR&key=${API_KEY}`
  );
  let json = await response.json();
  return json.items;
}

// videoId 값을 받아 하나의 video의 데이터를 가져오는 api
export async function getVideo(id) {
  let response = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${id}&key=${API_KEY}`
  );
  let json = await response.json();
  return json.items;
}

/*
  videoCategoryId=10&
*/
// sports = 17
