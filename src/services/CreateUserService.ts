import { getRepository } from 'typeorm';
import { hash } from 'bcryptjs';

import User from '../models/Users';

interface Request {
    name: string;
    email: string;
    phone: string;
    password: string;
}

class CreateUserService {
    public async execute({
        name,
        email,
        phone,
        password,
    }: Request): Promise<User> {
        const userRepository = getRepository(User);

        const checkUserExists = await userRepository.findOne({
            where: { email },
        });

        if (checkUserExists) {
            throw new Error('email already exists.');
        }

        const checkUserPhone = await userRepository.findOne({
            where: { phone },
        });

        if (checkUserPhone) {
            throw new Error('phone already exists.');
        }

        const hashedPassword = await hash(password, 8);

        const user = userRepository.create({
            name,
            email,
            password: hashedPassword,
            phone,
        });

        await userRepository.save(user);

        return user;
    }
}

export default CreateUserService;
