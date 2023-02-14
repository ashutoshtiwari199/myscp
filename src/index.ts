import { spawn } from "child_process";
import os from 'os';
// import path from "path";
import { EventEmitter } from "stream";

interface options {
    path: string;
    hostIP: string;
    user: string;
    password: string;
    serverPath: string;
    localDownLoadPath?: string;
}

export class myscp extends EventEmitter {
    public output:Array<string>;
    public path: string;
    public hostIP: string;
    public user: string;
    public password: string;
    public serverPath: string;
    public localDownLoadPath: string | undefined;

    
    constructor(private options: options) {
        super();
        this.path = this.options.path;
        this.hostIP = this.options.hostIP;
        this.user = this.options.user;
        this.password = this.options.password;
        this.serverPath = this.options.serverPath;
        this.localDownLoadPath = this.options.localDownLoadPath;
    }

    public list(flag?: string): void{
        const myprocess = spawn(`sshpass -p ${this.password} ssh -o ConnectTimeout=${'5'} ${this.user}@${this.hostIP} ls ${flag} ${this.serverPath}`, [], {shell: true});
        myprocess.stdout.on('data', (message) => {
            this.output = message.toString().split('\n');
            this.emit('result', this.output);
            // return this.output;
        })

        myprocess.stderr.on('data', (message) => {
            console.log(`Proccess Exited witb Error: ${message.toString()}`);
            this.output = message.toString().split('\n');
            this.emit('error', this.output);
            // return message.toString().split('\n')
        })

        myprocess.on('exit', (code) => {
            this.emit('exit', code);
        })
    }

    public download(filename: string){
        const myprocess = spawn(`sshpass -p ${this.password} scp -o ConnectTimeout=${'5'} ${this.user}@${this.hostIP}:${this.serverPath}/${filename} ${this.localDownLoadPath}`, [], {shell: true});
        myprocess.stdout.on('data', (message) => {
            this.output = message.toString().split('\n');
            this.emit('result', this.output);
        })

        myprocess.stderr.on('data', (message) => {
            console.log(`Proccess Exited witb Error: ${message.toString()}`);
            this.output = message.toString().split('\n');
            this.emit('error', this.output);
        })

        myprocess.on('exit', (code) => {
            this.emit('exit', code);
        })
    }
}