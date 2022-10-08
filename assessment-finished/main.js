const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

const storyText = '華氏40度のとき、:insertx:は散歩に出かけました。 :inserty:についた時、しばし恐れに慄いて:insertz:。Bobは一部始終を見ていましたが驚きませんでした。というのも:insertx: は110ポンドで暑い日だったのです。';
const insertX = ['津田', '健次郎', '梅子'];
const insertY = ['スカイツリー', '東京タワー', '国会議事堂'];
const insertZ = ['歩道の水たまりに溶けていきました', '発火しました', 'なめくじになって道を這って逃げました'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("jp").checked) {
    const weight = `50kg`;
    const temperature =  `摂氏-1度`;
    newStory = newStory.replace('華氏40度', temperature);
    newStory = newStory.replace('110ポンド', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
