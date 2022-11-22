import { HttpException, HttpStatus } from '@nestjs/common';

export const validationBodyCreateUser = (body) => {
  const { first_name, last_name, username, email, password } = body;
  if (!first_name || !last_name || !username || !email || !password) {
    throw new HttpException('some field is not filled', HttpStatus.BAD_REQUEST);
  }
};

export const validationCreateUser = async (username, email, userRepository) => {
  const userName = await userRepository.findOne({ where: { username } });
  const userEmail = await userRepository.findOne({ where: { email } });
  if (userName) {
    throw new HttpException('User already exists', HttpStatus.CONFLICT);
  }
  if (userEmail) {
    throw new HttpException('Email is already being used', HttpStatus.CONFLICT);
  }
  if (!userName && !userEmail) {
    return false;
  }
};

export const validationId = async (id: number, userRepository) => {
  const user = await userRepository.findOneBy({ id });
  if (!user) {
    throw new HttpException('ID not found or invalid.', HttpStatus.NOT_FOUND);
  } else {
    return false;
  }
};
