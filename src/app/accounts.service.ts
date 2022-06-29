export class AccountsService {
    accounts = [
        {
            name: 'Master Acount',
            status: 'active'
        },
        {
            name: 'Test Acount',
            status: 'inactive'
        },
        {
            name: 'Hidden Acount',
            status: 'unknown'
        }
    ];

    addAccount(name: string, status: string) {
        this.accounts.push({ name: name, status: status });
    }

    updateStatus(id: number, status: string) {
        this.accounts[id].status = status;

    }
}