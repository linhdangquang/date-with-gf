import fs from 'fs';

export const saveData = <T>(data: T, path: string) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};

export const loadData = (path: string) => {
  return JSON.parse(fs.readFileSync(path, 'utf-8'));
};

export const appendData = <T>(data: T, path: string) => {
  fs.appendFileSync(path, JSON.stringify(data, null, 2));
};

export const deleteData = (path: string) => {
  fs.unlinkSync(path);
};

export const updateData = <T>(data: T, path: string) => {
  fs.writeFileSync(path, JSON.stringify(data, null, 2));
};
