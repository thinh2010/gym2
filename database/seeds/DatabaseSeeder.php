<?php

use App\Laravue\Models\User;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use App\Laravue\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        $admin = User::create([
            'name' => 'Admin',
            'email' => 'admin@raynguyen.net',
            'password' => Hash::make('gymgym@123'),
        ]);
        $manager = User::create([
            'name' => 'Manager',
            'email' => 'manager@raynguyen.net',
            'password' => Hash::make('gymgym@123'),
        ]);
        $editor = User::create([
            'name' => 'Editor',
            'email' => 'editor@raynguyen.net',
            'password' => Hash::make('gymgym@123'),
        ]);
        $user = User::create([
            'name' => 'User',
            'email' => 'user@raynguyen.net',
            'password' => Hash::make('gymgym@123'),
        ]);
        $visitor = User::create([
            'name' => 'Visitor',
            'email' => 'visitor@raynguyen.net',
            'password' => Hash::make('gymgym@123'),
        ]);

        $adminRole = Role::findByName(\App\Laravue\Acl::ROLE_ADMIN);
        $managerRole = Role::findByName(\App\Laravue\Acl::ROLE_MANAGER);
        $editorRole = Role::findByName(\App\Laravue\Acl::ROLE_EDITOR);
        $userRole = Role::findByName(\App\Laravue\Acl::ROLE_USER);
        $visitorRole = Role::findByName(\App\Laravue\Acl::ROLE_VISITOR);
        $admin->syncRoles($adminRole);
        $manager->syncRoles($managerRole);
        $editor->syncRoles($editorRole);
        $user->syncRoles($userRole);
        $visitor->syncRoles($visitorRole);
        $this->call(UsersTableSeeder::class);
        $this->call(PageSeeder::class);
        $this->call(SettingSeeder::class);
    }
}
