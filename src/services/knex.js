let conn;

const knexService = () => {
  if (!conn) {
    conn = ''; //TODO connect to db
  }
  return conn;
}

export default knexService;