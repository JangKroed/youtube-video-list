export const addElement = (data, views, start, end) => {
  // 스크롤을 맨 위로 올려보내는 코드
  window.scrollTo(0, 0);
  // .video-grid안을 비워버리는 코드
  $(".video-grid").empty();
  // 초기에 받아온 data에서 start부터 end까지 잘라와 newData 변수에 할당
  console.log(data);
  const newData = data.slice(start, end);
  // 화면에 동영상을 .video-grid 안에 append
  newData.map((item, idx) => {
    const {
      id,
      snippet: {
        channelTitle,
        title,
        publishedAt,
        thumbnails: { medium },
      },
    } = item;
    // viewCount를 추출하기
    const {
      statistics: { viewCount },
    } = views[idx];
    /* <a href="https://youtu.be/${id}"></a> */
    $(".video-grid").append(`
    <div class="video-grid__item">
      <figure class="video-grid__item-img">
          <button onClick="save_mycontent(
          '${title}', 
          '${channelTitle}', 
          '${viewString(viewCount)}', 
          '${medium.url}', 
          'https://youtu.be/${id}')" class="btn btn-warning">찜
          </button>
          <a href="https://youtu.be/${id}">
            <img id="imageUrl" src="${medium.url}" alt="Image" style="width: 100%; height: 180px;">
          </a>
      </figure>
      <div class="video-grid__item-info">
        <h2>${title}</h2>
        <div>
          <span id="channelTitle">${channelTitle}</span>
          <span id="viewCount">${viewString(viewCount)}</span>
        </div>
      </div>
    </div>
    `);
  });
};

const viewString = (num) => {
  if (num < 1000) return `조회수 ${num}회`;
  else if (num >= 1000 && num < 10000)
    return `조회수 ${Math.floor(num / 1000)}.${Math.floor(
      (num % 1000) / 100
    )}천회`;
  else if (num > 10000 && num < 100000)
    return `조회수 ${Math.floor(num / 10000)}.${Math.floor(
      (num % 10000) / 1000
    )}만회`;
  else return `조회수 ${Math.floor(num / 10000)}만회`;
};

// `<div class="video-grid__item">
//   <a href="https://youtu.be/${id}" style="width: 100%;">
//     <div id="imageUrl" class="video-grid__item-img" style="background-image:url('${medium.url}')">
//       <button onClick="save_mycontent('${title}', '${channelTitle}', '${viewString(viewCount)}', '${medium.url}', 'https://youtu.be/${id}')" class="btn btn-warning">
//       찜
//       </button>
//     </div>
//   </a>
//     <div class="video-grid__item-info">
//       <h2 id="title">${title}</h2>
//       <div>
//         <span id="channelTitle">${channelTitle}</span>
//         <span id="viewCount">${viewString(viewCount)}</span>
//       </div>
//     </div>
// </div>`

// `<div class="video-grid__item">
//   <figure class="video-grid__item-img">
//       <a href="https://youtu.be/${id}">
//         <img id="imageUrl" src="${medium.url}" alt="Image">
//         <button onClick="save_mycontent(
//         '${title}',
//         '${channelTitle}',
//         '${viewString(viewCount)}',
//         '${medium.url}',
//         'https://youtu.be/${id}')" class="btn btn-warning">찜
//         </button>
//       </a>
//   </figure>
//   <div class="video-grid__item-info">
//     <h3>${title}</h3>
//     <div>
//       <span id="channelTitle">${channelTitle}</span>
//       <span id="viewCount">${viewString(viewCount)}</span>
//     </div>
//   </div>
// </div>`