import config from "../../../config";
import type { HeaderTabUrl } from "../../common";

const request = async (path: string, data: any) => {
  if (!config.MongoDb.MONGODB_PASS || !config.MongoDb.MONGODB_USER) {
    throw new Error(
      "Need Mongodb Atlas Authentication密码" + config.MongoDb.MONGODB_PASS
    );
  }

  const url = config.MongoDb.MONGODB_ENDPOINT + path;
  const requestData = {
    ...data,
    dataSource: config.MongoDb.MONGODB_DATA_SOURCE,
    database: config.MongoDb.database,
    collection: config.MongoDb.collection
  };

  const res = await $fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      email: config.MongoDb.MONGODB_USER as string,
      password: config.MongoDb.MONGODB_PASS as string
    },
    body: requestData
  });
  return res as any;
};

export async function getVisitors (type: HeaderTabUrl) {
  const res = await request("/action/find", {
    filter: {
      ntype: type
    },
    projection: { _id: 0, nid: 1, nvisitors: 1 }
  });
  return res.documents;
}

export async function increaseVisitors ({
  id,
  type,
  inc
}: {
  id: number
  type: HeaderTabUrl
  inc?: boolean
}) {
  const preset = {
    nid: id,
    ntype: type
  };
  const incN = inc ? 1 : 0;
  const res = await request("/action/updateOne", {
    filter: preset,
    update: {
      $inc: {
        nvisitors: incN
      }
    }
  });
  if (!res.modifiedCount) {
    await request("/action/insertOne", {
      document: {
        ...preset,
        nvisitors: config.MongoDb.initialVisitors
      }
    });
    return config.MongoDb.initialVisitors;
  }
  return (
    await request("/action/findOne", {
      filter: preset
    })
  ).document.nvisitors;
}
