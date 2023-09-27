import { env } from "./env";

export const buildDatabaseConnectionString = (databaseName: string) => {
  return `postgresql://${env.BACKUP_DATABASE_USER}:${env.BACKUP_DATABASE_PASSWORD}@${env.BACKUP_DATBASE_HOST}/${databaseName}`;
};
