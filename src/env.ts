import { envsafe, str, bool } from "envsafe";

export const env = envsafe({
  AWS_ACCESS_KEY_ID: str(),
  AWS_SECRET_ACCESS_KEY: str(),
  AWS_S3_BUCKET: str(),
  AWS_S3_REGION: str(),
  BACKUP_DATABASE_USER: str({
    desc: "The root user of the database.",
  }),
  BACKUP_DATABASE_PASSWORD: str({
    desc: "The root password of the database.",
  }),
  BACKUP_DATBASE_HOST: str({
    desc: "The host of the database to backup.",
  }),
  BACKUP_DATABASE_PORT: str({
    desc: "The port of the database to backup.",
    default: "3306",
    allowEmpty: true,
  }),
  BACKUP_DATABASE_NAMES: str({
    desc: "Names of databases to backup separated by semi-colon.",
  }),
  BACKUP_CRON_SCHEDULE: str({
    desc: "The cron schedule to run the backup on.",
    default: "0 5 * * *",
    allowEmpty: true,
  }),
  AWS_S3_ENDPOINT: str({
    desc: "The S3 custom endpoint you want to use.",
    default: "",
    allowEmpty: true,
  }),
  RUN_ON_STARTUP: bool({
    desc: "Run a backup on startup of this application",
    default: false,
    allowEmpty: true,
  }),
});
