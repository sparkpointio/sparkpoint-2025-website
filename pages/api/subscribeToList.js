import mailjet from 'node-mailjet';

export default async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({ error: "Method not allowed" });
    }

    const { email } = req.body;
    if (!email) {
        return res.status(400).json({ error: "Email is required" });
    }

    try {
        const request = mailjetClient.post('contact/managemanycontacts', { version: 'v3' }).request({
            ContactsLists: [
                {
                    ListID: process.env.MAILJET_LIST_ID,
                    Action: 'addnoforce',
                },
            ],
            Contacts: [{ Email: email }],
        });

        const response = await request;
        return response.body;
    } catch (error) {
        res.status(500).json({ error: "Failed to subscribe." });
    }
}
