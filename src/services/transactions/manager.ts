import { Repository, getRepository, DeleteResult, MoreThanOrEqual } from "typeorm";
import Transaction from "../../entities/TransactionModel";
import Account from "../../entities/AccountModel";
import { IManager } from "../common/manager";

interface TransactionWithAccountId extends Transaction {
  accountId: string;
}

/**
 * Entity manager for User model
 * This is where you define logic to access data from database
 *
 * To read more about using a Manager object,
 * refer to UserManager class in `src/service/users/manager.ts`
 */
class TransactionManager implements IManager {
  protected transactionRepository: Repository<Transaction>;
  protected accountRepository: Repository<Account>;

  /**
   * FIXME
   * After defining the Account entity,
   * uncomment the lines in the constructor definition
   */
  constructor() {
    this.transactionRepository = getRepository(Transaction);
    this.accountRepository = getRepository(Account);
  }

  /**
   * FIXME
   * Get a transaction from database
   */
  public async getTransaction(transactionId: string): Promise<Transaction> {
    return await this.transactionRepository.findOne({ id: transactionId });
  }

  /**
   * FIXME
   * Get a list of transactions with ids from database
   */
  public async listTransactionsByIds(transactionIds: string[]): Promise<Transaction[]> {
  //   // let transactionArray = this.transactionRepository.find()
  //   // await this.transactionRepository.findOne({ id: transactionIds });
  return Promise.resolve([]);
  }

  /**
   * FIXME
   * Get a list of transactions of a particular account
   */
  public async listTransactionsInAccount(accountId: string): Promise<Transaction[]> {
    // return await this.transactionRepository.find({ id: accountId });
    return Promise.resolve([]);
  }

  /**
   * FIXME
   * Get a list of transactions less than `maximumAmount` in a particular `account`
   */
  public async filterTransactionsByAmountInAccount(accountId: string, maximumAmount: number): Promise<Transaction[]> {
    return Promise.resolve([]);
  }

  /**
   * FIXME
   * create a new transaction
   */
  public async createTransaction(details: Partial<TransactionWithAccountId>): Promise<Transaction> {
    const newTransaction = new Transaction();
    newTransaction.amount = details.amount;
    newTransaction.transactionDate = details.transactionDate;
    newTransaction.description = details.description;
    newTransaction.account = details.account;

    return this.transactionRepository.save(newTransaction);
  }

  /**
   * update a transaction
   *
   * FIXME
   * 1. Remove the return statement
   * 2. Uncomment the remaining lines
   */
  public async updateTransaction(
    transactionId: string,
    changes: Partial<TransactionWithAccountId>,
  ): Promise<Transaction> {
    // if ("accountId" in changes) {
    //     changes = {
    //         ...changes,
    //         account: <any>{ id: changes.accountId }
    //     };
    // }
    // await this.transactionRepository.update(transactionId, changes);
    // return this.transactionRepository.findOne(transactionId);
    return Promise.resolve(new Transaction());
  }

  /**
   * FIXME
   * delete a transaction
   */
  public async deleteTransaction(transactionId): Promise<DeleteResult | void> {
    let transactionToRemove = await this.transactionRepository.findOne( {id: transactionId } );
    await this.transactionRepository.remove(transactionToRemove);  }
}

export default TransactionManager;
