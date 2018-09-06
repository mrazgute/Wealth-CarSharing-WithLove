const getURL = () => process.env.REACT_APP_PROD ? 'http://54.229.186.115:5000' : 'http://localhost:5000';

export default getURL;