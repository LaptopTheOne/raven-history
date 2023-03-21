const testData = require('./test-data');
const path = require('path');
const axios = require('axios');

const HISTORY_URL = 'https://oauth.reddit.com/user/'
const SAVED_ITEMS_ENDPOINT = '/saved'

const generateSavedItemsUrl = function (username) {
  return `${HISTORY_URL}${username}${SAVED_ITEMS_ENDPOINT}`;
}

const fetchAllSavedItems = async function (username, token) {

  // TEST only
  // return testData["testData"];

  console.log('fetching all saved items...');
  const limitParam = 100;
  const countParam = 100;
  const savedItemsUrl = generateSavedItemsUrl(username);
  let afterParam = null;
  const savedItems = [];

  // make initial request
  const config = {
    headers: {
      Authorization: `Bearer ${token}`
    },
    params: {
      count: countParam,
      limit: limitParam
    }
  };

  let result = await axios.get(savedItemsUrl, config);
  savedItems.push(result.data.data.children)
  afterParam = result.data.data.after

  while (afterParam) {
    console.log('fetching next items, after:', afterParam);
    config.params['after'] = afterParam
    result = await axios.get(savedItemsUrl, config);
    savedItems.push(result.data.data.children)
    afterParam = result.data.data.after
  }

  // extract from data: subreddit, title, link_flair_text, url
  let flattenedSavedItems = savedItems.flat().map((item) => {
    return {
      subreddit:item.data.subreddit,
      title:item.data.title,
      link_flair_text:item.data.link_flair_text,
      url: item.data.url
    }
  });

  return flattenedSavedItems.reduce((groups, item) => {
      const group = (groups[item.subreddit] || []);
      group.push(item);
      groups[item.subreddit] = group;
      return groups;
    }, {});

}

exports.fetchAllSavedItems = fetchAllSavedItems;