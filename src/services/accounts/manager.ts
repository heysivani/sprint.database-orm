import Transaction from "../../entities/TransactionModel";
import { Repository, getRepository, DeleteResult } from "typeorm";
import Account from "../../entities/AccountModel";
import { IManager } from "../common/manager";

interface AccountWithBalance extends Account {
  balance: number;
}

class AccountManager implements IManager {
  protected accountRepository: Repository<Account>;
  protected transactionRepository: Repository<Transaction>;

  constructor() {
    this.accountRepository = getRepository(Account);
    this.transactionRepository = getRepository(Transaction);
  }

  /**
   * Get account DONE
   *
   * TO DO:
   * Requirements:
   * - Derive balance (both debit and credit)
   */

  public async getAccount(accountId: string): Promise<Account> {
    return await this.accountRepository.findOne({ id: accountId });
  }

  /**
   * 
   * create a new account DONE
   */
  public async createAccount(details: Partial<Account>): Promise<Account> {
    const newAccount = new Account();
    newAccount.name = details.name;
    newAccount.owner = details.owner;
    return this.accountRepository.save(newAccount);
  }

  /**
   * 
   * update account details DONE
   */
  public async updateAccount(accountId: string, changes: Partial<Account>): Promise<Account> {
    let accountToUpdate = await this.accountRepository.findOne( {id: accountId });
    for(let key in accountToUpdate){
      if(changes[key]){
        accountToUpdate[key] = changes[key];
      }
    }
    return await this.accountRepository.save(accountToUpdate);
  }

  /**
   * 
   * delete account DONE
   *
   * Requirements:
   * - Cascade and delete all transactions
   */
  public async deleteAccount(accountId: string): Promise<DeleteResult | void> {
    let accountToRemove = await this.accountRepository.findOne( {id: accountId } );
    await this.accountRepository.remove(accountToRemove);
  }
}

export default AccountManager;
