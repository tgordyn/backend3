import MockingService from "../services/mocking.js";
import Users from "../dao/Users.dao.js";
import Pets from "../dao/Pets.dao.js";

const usersService = new Users();
const petsService = new Pets();

const getMascotas = async (req, res) => {
  const mascotas = await MockingService.generateMockingMascotas(100);
  res.send({status:  "success", payload: mascotas})
}

const getUsuarios = async (req, res) => {
  const usuarios = await MockingService.generateMockingUsuarios(50);
  res.send({status:  "success", payload: usuarios})
}


const generateData = async (req, res) => {
  try {
    const { users, pets } = req.body;


    if (!users || !pets || users < 0 || pets < 0) {
      return res.status(400).send({ status: 'error', message: 'Parámetros inválidos' });
    }


    const usuarios = await MockingService.generateMockingUsuarios(users);
    const mascotas = await MockingService.generateMockingMascotas(pets);


    const savedUsers = await usersService.save(usuarios);


    const petsWithOwners = mascotas.map((pet) => ({
      ...pet,
      owner: savedUsers[Math.floor(Math.random() * savedUsers.length)]._id,
    }));


    await petsService.save(petsWithOwners);

    res.send({
      status: 'success',
      message: 'Datos generados e insertados correctamente',
    });
  } catch (error) {
    res.status(500).send({ status: 'error', message: error.message });
  }
};

export default { getMascotas, getUsuarios, generateData}
