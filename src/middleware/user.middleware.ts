import { HttpException, HttpStatus } from '@nestjs/common';

export const validationCreateUser = async (username, email, userRepository) => {
  const userName = await userRepository.findOne({ where: { username } });
  const userEmail = await userRepository.findOne({ where: { email } });
  if (userName) {
    throw new HttpException('User already exists', HttpStatus.BAD_REQUEST);
  }
  if (userEmail) {
    throw new HttpException(
      'Email is already being used',
      HttpStatus.BAD_REQUEST,
    );
  }
  if (!userName && !userEmail) {
    return false;
  }
};
