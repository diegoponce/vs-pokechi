import * as vscode from 'vscode'

// Minimal slice of the built-in Git extension's API (vscode.git) - just
// enough to watch every open repository's HEAD and read a commit's date.
// Not published as an npm package, so the shape is hand-copied here instead
// of imported.

export interface Commit {
  readonly hash: string
  readonly parents: string[]
  readonly commitDate?: Date
}

export interface Branch {
  readonly name?: string
  readonly commit?: string
}

export interface RepositoryState {
  readonly HEAD: Branch | undefined
  readonly onDidChange: vscode.Event<void>
}

export interface Repository {
  readonly rootUri: vscode.Uri
  readonly state: RepositoryState
  getCommit(ref: string): Promise<Commit>
}

export interface GitAPI {
  readonly repositories: Repository[]
  readonly onDidOpenRepository: vscode.Event<Repository>
}

export interface GitExtension {
  getAPI(version: 1): GitAPI
}
