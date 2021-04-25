export default class IterationsService {
  public static forEach = (array: any, callback: any): void => {
    const { length } = array;

    for (let index = 0; index < length; index += 1) {
      const value = array[index];
      callback(value, index, array);
    }
  };
}
