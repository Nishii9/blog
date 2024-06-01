import getDatabase from '../../components/Mongo/getDatabase';

async function handler(req, res) {
  if (req.method === 'POST') {
    const data = req.body;
    data.image = data.image || null; 

    const { client, db } = await getDatabase();
    const placesCollec = db.collection('posts');

    const result = await placesCollec.insertOne(data);
    client.close();
    res.status(201).json({ msg: 'done' });
  }
}

export default handler;
