import { SheetService } from './sheet.service';

function createNewFile(): void {
  const ss = SheetService.createInitialFile('New file');
  ss.getRange('A2').setValue('Happy gas!');
}
