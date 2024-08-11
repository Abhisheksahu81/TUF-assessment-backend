import Banner from "../model/banner.js";

export const update_banner = async (req , res) => {
    try {
        const { visibility, heading, description, time, url } = req.body;
        let newtime = new Date().toISOString(); 
        console.log(req.body);
        const newRecord = await Banner.upsert({
            id : 1,
            visibility,
            heading,
            description,
            time : newtime,
            url
        });

        res.status(201).json(newRecord);
    } catch (error) {
        console.error('Error creating record:', error);
        res.status(500).json({ error: 'An error occurred while creating the record.' });
    }
}

export const get_banner = async(req,res) => {
    try {
        
        const record = await Banner.findByPk(1);
        res.status(200).json(record);
    } catch (error) {
        console.error('Error retrieving record:', error);
        res.status(500).json({ error: 'An error occurred while retrieving record.' });
    }
}