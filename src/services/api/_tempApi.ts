import { TempItem } from '@/types/models';

const getTempItems = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const tempData: TempItem[] = [
        { id: '1', name: 'name1', email: 'name1@gmail.com' },
        { id: '2', name: 'name2', email: 'name2@gmail.com' },
        { id: '3', name: 'name3', email: 'name3@gmail.com' },
      ];
      resolve(tempData);
    }, 1000);
  });
};

export { getTempItems };
