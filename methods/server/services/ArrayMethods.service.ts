export default class ArrayMethodsService {
  public static map = {
    name: "map",
    method: (array: any, callback: any): any[] => {
      const result = [];
      const { length } = array;

      for (let index = 0; index < length; index += 1) {
        const value = array[index];

        result[index] = callback(value, index, array);
      }

      return result;
    },
    // TODO make 5 dynamic input
    callback: (array: any) =>
      ArrayMethodsService.map.method(array, (value: any) => value + 5),
  };

  public static forEach = {
    name: "forEach",
    method: (array: any, callback: any) => {
      const { length } = array;

      for (let index = 0; index < length; index += 1) {
        const value = array[index];
        callback(value, index, array);
      }
    },
    callback: (array: any) =>
      ArrayMethodsService.forEach.method(array, (value: any) => value),
  };
}
