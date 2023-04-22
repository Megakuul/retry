export interface RetryOptions {
  retries?: number;
  minTimeoutms?: number;
  maxTimeoutms?: number;
  factor?: number;
}

declare function retry(fun: () => Promise<void>, options?: RetryOptions): Promise<void>;

export = retry;