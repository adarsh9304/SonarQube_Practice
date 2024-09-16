const mongoose=require('mongoose');
const connect=require('../src/database.js')

jest.mock('mongoose', () => ({
    connect: jest.fn(),  
  }));

describe('Database connection',()=>{
    it('should connect to the database successfully', async () => {
        mongoose.connect.mockResolvedValueOnce('Connected to DB');
    
        await connect();
    
        expect(mongoose.connect).toHaveBeenCalledWith(process.env.MONGODB_URL, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
        });
})
});