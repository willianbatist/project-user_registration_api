import { HttpException, HttpStatus } from '@nestjs/common';

export const validationCreateUser = async (username, email, userRepository) => {
  const userName = await userRepository.findOne({ where: { username } });
  const userEmail = await userRepository.findOne({ where: { email } });
  if (userName) {
    throw new HttpException('User already exists', HttpStatus.OK);
  }
  if (userEmail) {
    throw new HttpException('Email is already being used', HttpStatus.OK);
  }
  if (!userName && !userEmail) {
    return false;
  }
};
