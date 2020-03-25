<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Carbon\Carbon;
use Exception;
use Illuminate\Http\Request;
use Storage;

class MediaController extends Controller {

    private $fileSystem;
    private $storageDisk;
    private $ignoreFiles;

    public function __construct()
    {
        $this->fileSystem    = config('mediaManager.storage_disk');
        $this->storageDisk   = Storage::disk($this->fileSystem);
        $this->ignoreFiles   = config('mediaManager.ignore_files');
    }

    public function getFiles() {
        $dir = request('dir');
        $files          = [];
        $storageFiles   = $this->storageDisk->files($dir);
        $storageFolders = $this->storageDisk->directories($dir);
        $pattern = $this->ignoreFiles;
        foreach ($storageFolders as $folder) {
            if (!preg_grep($pattern, [$folder])) {
                $files[] = [
                    'name'          => strpos($folder, '/') > 1 ? str_replace('/', '', strrchr($folder, '/')) : $folder,
                    'type'          => 'folder',
                    'path'          => $this->storageDisk->url(urlencode($folder)),
                    'size'          => '',
                    'items'         => count($this->storageDisk->allFiles($folder)) + count($this->storageDisk->allDirectories($folder)),
                    'last_modified' => Carbon::createFromTimestamp($this->storageDisk->lastModified($folder))->toDateString(),
                ];
            }
        }
        foreach ($storageFiles as $file) {
            if (!preg_grep($pattern, [$file])) {
                $files[] = [
                    'name'          => strpos($file, '/') > 1 ? str_replace('/', '', strrchr($file, '/')) : $file,
                    'type'          => $this->storageDisk->mimeType($file),
                    'path'          => $this->storageDisk->url($file),
                    'size'          => $this->storageDisk->size($file),
                    'last_modified' => Carbon::createFromTimestamp($this->storageDisk->lastModified($file))->toDateString(),
                ];
            }
        }
        return $files;
    }
}