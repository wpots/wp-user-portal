import axios from 'axios';

const contentEndpoint = 'http://www.goedgebekt.com/core/graphql';

const getTitle = () => axios({
  url: contentEndpoint,
  method: 'post',
  data: {
    query: `query MyQuery {
      allSettings {
        generalSettingsTitle
      }
    }`,
  },
}).then((result) => {
  console.log(result.data);
});

export default getTitle;
