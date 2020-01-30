

const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: false,
  autoplay: false,
  lrcType: 3,
  audio: [
    {
      "name": "麻雀",
      "artist": "李荣浩",
      "url": "/aPlayer/file/麻雀.mp3",
      "cover": "http://p2.music.126.net/TzlSVBiNtpRD2b7MT2Hi-w==/109951164527590793.jpg?param=300y300"
    },
    {
      "name": "沙漠骆驼",
      "artist": "展展与罗罗",
      "url": "/aPlayer/file/沙漠骆驼.mp3",
      "cover": "https://p3.music.126.net/oov7j64hTKZSm0CEUkRNoQ==/109951163111639178.jpg?param=300y300"
    },
  ]
});
