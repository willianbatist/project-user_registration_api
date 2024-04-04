import { HttpException, HttpStatus } from '@nestjs/common';

export const validationBodyLogin = (body) => {
  const { email, password } = body;
  if (!email) {
    throw new HttpException('Email field not sent', HttpStatus.BAD_REQUEST);
  }
  if (!password) {
    throw new HttpException('Password field not sent', HttpStatus.BAD_REQUEST);
  }
};

export const validationBodyCreateUser = (body) => {

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

export const validationBodyUpdate = (body) => {
  const { first_name, last_name, username, email, password } = body;
  if (!first_name && !last_name && !username && !email && !password) {
    throw new HttpException(
      'no content has been uploaded',
      HttpStatus.BAD_REQUEST,
    );
  }
};
