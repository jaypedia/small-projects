var titlesArr = [];
var contentsArr = [];

document
  .getElementById('story_add_button')
  .addEventListener('click', addedStory);
document.getElementById('test_button').addEventListener('click', testlog);

function addedStory() {
  if (storyTitle && storyContent === '') return;

  // textarea에 입력받은 title과 content를 가져온다.
  var storyTitle = document.getElementById('story_title');
  const userInputValue = storyTitle.value;
  var storyContent = document.getElementById('story_content').value;

  // titlesArr, contentsArr Array에 가져온 title과 content를 넣는다.

  titlesArr.push(storyTitle);
  contentsArr.push(storyContent);
  storedStory(); // createStory()
}

function storedStory() {
  // 받아온 내용을 넣을 Elements를 생성한다.
  const storyDiv = document.createElement('div');
  storyDiv.className = 'story_container';

  const storyInput = document.createElement('input');
  storyInput.className = 'story_input';
  storyInput.name = 'story_name';
  storyInput.type = 'radio';

  const titleArrsLength = titlesArr.length;
  const storyInputId = 'story_number' + titleArrsLength;
  storyInput.id = storyInputId;

  const storyTitleLabel = document.createElement('label');
  storyTitleLabel.className = 'story_title_label';

  // The value of the for attribute must be a single id for a labelable
  // form-related element in the same document as the <label> element.

  storyTitleLabel.htmlFor = storyInputId;
  // storyTitleLabel.data-label-closed = "show";
  // storyTitleLabel.data-label-open = "show";

  const storyContentDiv = document.createElement('div');
  storyContentDiv.className =
    'story_content_div ' + 'content-' + titleArrsLength;

  // array에서 입력받은 title, content를 가져와 텍스트노드에 넣는다.
  const storyTitleText = titlesArr.slice(-1)[0];
  const storyContentText = contentsArr.slice(-1)[0];
  const storyTitleTextNode = document.createTextNode(storyTitleText);
  const storyContentTextNode = document.createTextNode(storyContentText);

  // title, content element안에 title, content 텍스트 노드를 를 넣는다.
  storyTitleLabel.appendChild(storyTitleTextNode);
  storyContentDiv.appendChild(storyContentTextNode);

  const storyList = document.getElementById('stories_id');
  storyDiv.append(storyInput, storyTitleLabel, storyContentDiv);
  storyList.append(storyDiv);

  // console.log(typeof storyTitleText);
  // console.log(typeof storyContentText);
  console.log('storyTitleText: ' + storyTitleText);
  console.log('storyContentText: ' + storyContentText);
  console.log(titlesArr);
  console.log(contentsArr);
  console.log(storyList);

  const accordionList = document.getElementsByClassName('accordion_container');
  console.log(accordionList);

  // X를 누를 경우 삭제.
  // var removeStories = document.getElementsByClassName('story_remove');
  //     for (let i = 0; i < removeStories.length; i++) {
  //         removeStories[i].id = i;
  //         removeStories[i].addEventListener('click', remove);
  //     };
}

// function remove(event) {
//     storeStories.splice(event.target.id, 1);
//     storedStory();
//     return false;

// }

function testlog() {
  console.log('test done!');
}
