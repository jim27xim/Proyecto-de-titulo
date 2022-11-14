const oracledb = require("oracledb");

cns = {
  user: "JIM",
  password: "admin",
  connectString: "localhost:1521/xe",
};

async function Open(sql, binds, autoCommit) {
  let cnn = await oracledb.getConnection(cns);
  let result = await cnn.execute(sql, binds, { autoCommit });
  cnn.release();
  return result;
}

exports.Open = Open;