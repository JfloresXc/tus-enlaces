import { User } from '@app/user/models/user.interface';

export interface LogInResponse {
    errors?: unknown;
    response?: {
        token: string;
        email: string;
    };
    message?: string;
    status?: number;
}