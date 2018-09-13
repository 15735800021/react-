export const wrapServer = opt => {
    return server
      .request({
        method: 'post',
        ...opt,
      })
      .then(response => {
        const data = response.data;
        if (data.code === 0 || data.code === '0') {
          return data;
        } else {
          return Promise.reject(response);
        }
      })
      .catch(info => {
        return error(info);
      });
  };
  